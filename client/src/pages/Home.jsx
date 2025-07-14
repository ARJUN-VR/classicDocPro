import React, { useState } from "react";

function Home() {
  const [url, setUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Modal state
  const [showModal, setShowModal] = useState(false);

  // Fetched files
  const [files, setFiles] = useState([]);
  
  // Selected files state
  const [selectedFiles, setSelectedFiles] = useState({});

  // Handle input changes/paste
  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  const handlePaste = (e) => {
    setUrl(e.clipboardData.getData("text"));
  };

  // Toggle file selection
  const toggleFileSelection = (fileIndex) => {
    setSelectedFiles(prev => ({
      ...prev,
      [fileIndex]: !prev[fileIndex]
    }));
  };

  // Mock API call - Replace with your actual fetch/axios logic
  const fetchFiles = async (urlToAnalyze) => {
    const response = await fetch('http://localhost:3005/getFiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pullUrl: urlToAnalyze }),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch files');
    }
    const data = await response.json();
    return data;
  };

  const handleSubmit = async () => {
    if (url.trim()) {
      setIsLoading(true);

      // Simulate API call with the pasted URL
      try {
        const result = await fetchFiles(url);
        setFiles(result);
        
        // Initialize selection state for files
        const initialSelections = {};
        result.forEach((_, index) => {
          initialSelections[index] = false;
        });
        setSelectedFiles(initialSelections);

        // Show the "analysis" section (already in code) and open the modal
        setSubmitted(true);
        setShowModal(true);
      } catch (error) {
        console.error("Error fetching files:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h2 className="text-xl font-semibold text-gray-900">ClassicDocPro</h2>
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
              Help
            </button>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <main className="flex-1 pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center pt-16 pb-12">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Analyze Any URL
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Enter a URL below to fetch, process, and gain insights from its
              content with our advanced analysis tools.
            </p>
          </div>

          {/* Analysis Result Section */}
          {submitted && (
            <div className="mb-12">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-600"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        URL Analysis Complete
                      </h3>
                      <p className="text-sm text-gray-600">
                        Successfully analyzed {files.length} files
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 py-5">
                  <div className="bg-gray-50 rounded-lg p-4 mb-5">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <p className="text-sm font-medium text-gray-700 mb-1">
                          Analyzed URL:
                        </p>
                      </div>
                    </div>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:text-blue-800 hover:underline break-all transition-colors duration-200"
                    >
                      {url}
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Analyzed just now
                    </div>
                    <button
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                      onClick={() => setShowModal(true)}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Full Analysis
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Fixed bottom input area */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Enter a URL to analyze..."
                value={url}
                onChange={handleChange}
                onPaste={handlePaste}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                className="block w-full pl-12 pr-20 py-4 border border-gray-300 rounded-xl shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-lg"
              />
              <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                <button
                  onClick={handleSubmit}
                  disabled={!url.trim() || isLoading}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    !url.trim() || isLoading
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                      Analyze
                    </>
                  )}
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Enter any URL to analyze its content, metadata, and performance metrics
            </p>
          </div>
        </div>
      </div>

      {/* MODAL for showing files */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setShowModal(false)}
            ></div>
            
            {/* Modal panel */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
              {/* Modal header */}
              <div className="bg-white px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-gray-900" id="modal-title">
                        Analysis Results
                      </h3>
                      <p className="text-sm text-gray-500">
                        Files extracted from {new URL(url).hostname}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="rounded-full p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    <span className="sr-only">Close</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal body */}
              <div className="bg-gray-50 px-6 py-4 max-h-96 overflow-y-auto">
                {/* Selection summary */}
                <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                      <span className="font-medium text-gray-900">
                        {Object.values(selectedFiles).filter(Boolean).length} of {files.length} files selected
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {files.length} total files found
                    </span>
                  </div>
                </div>
                
                {/* Files list */}
                <div className="space-y-4">
                  {files.map((file, idx) => (
                    <div
                      key={idx}
                      className={`bg-white border-2 rounded-lg overflow-hidden transition-all duration-200 ${
                        selectedFiles[idx] 
                          ? 'border-blue-500 shadow-md' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
                        <div className="flex items-center">
                          <input 
                            type="checkbox"
                            id={`file-${idx}`}
                            checked={selectedFiles[idx] || false}
                            onChange={() => toggleFileSelection(idx)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                          />
                          <label 
                            htmlFor={`file-${idx}`} 
                            className="ml-3 flex-1 cursor-pointer font-medium text-gray-900 hover:text-gray-700"
                          >
                            {file.name}
                          </label>
                          <div className="ml-2 flex items-center">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {file.content.split('\n').length} lines
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <pre className="text-sm text-gray-700 whitespace-pre-wrap break-words bg-gray-50 p-3 rounded border overflow-x-auto">
                          {file.content}
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>

                {files.length === 0 && (
                  <div className="text-center py-12">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-gray-500 text-lg">No files found for this URL</p>
                    <p className="text-gray-400 text-sm mt-1">Try a different URL or check if the resource is accessible</p>
                  </div>
                )}
              </div>

              {/* Modal footer */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <button
                    className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      Object.values(selectedFiles).some(Boolean)
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!Object.values(selectedFiles).some(Boolean)}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Selected ({Object.values(selectedFiles).filter(Boolean).length})
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="inline-flex items-center px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;