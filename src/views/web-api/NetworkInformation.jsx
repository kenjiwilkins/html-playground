import {  useEffect, useState } from "react";

function NetworkInformation() {
  const [networkInfo, setNetworkInfo] = useState({
    downlink: undefined,
    effectiveType: undefined,
    rtt: undefined,
    saveData: undefined,
    type: undefined,
  });
  const [isSupported, setIsSupported] = useState(false);


  useEffect(() => {
    // Check if the Network Information API is supported
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;

    if (!connection) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);

    // Function to update network information
    const updateNetworkInfo = () => {
      setNetworkInfo({
        downlink: connection.downlink,
        effectiveType: connection.effectiveType,
        rtt: connection.rtt,
        saveData: connection.saveData,
        type: connection.type,
      });
    };

    // Initial update
    updateNetworkInfo();

    // Listen for changes in network conditions
    connection.addEventListener("change", updateNetworkInfo);

    // Cleanup
    return () => {
      connection.removeEventListener("change", updateNetworkInfo);
    };
  }, []);

  const formatValue = (value, unit = "") => {
    if (value === undefined || value === null) {
      return <span className="text-gray-400 italic">Not available</span>;
    }
    return (
      <span className="text-gray-900 font-medium">
        {value}
        {unit && ` ${unit}`}
      </span>
    );
  };

  const getEffectiveTypeColor = (type) => {
    switch (type) {
      case "4g":
        return "bg-green-100 border-green-300 text-green-800";
      case "3g":
        return "bg-yellow-100 border-yellow-300 text-yellow-800";
      case "2g":
        return "bg-orange-100 border-orange-300 text-orange-800";
      case "slow-2g":
        return "bg-red-100 border-red-300 text-red-800";
      default:
        return "bg-gray-100 border-gray-300 text-gray-800";
    }
  };

  return (
    <div className="p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Network Information API</h1>

      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          The Network Information API provides information about the system&apos;s
          connection in terms of general connection type (e.g., &apos;wifi&apos;,
          &apos;cellular&apos;, etc.). This can be used to select high definition content
          or low definition content based on the user&apos;s connection.
        </p>

        {!isSupported ? (
          <div className="bg-red-50 border border-red-200 rounded p-4 mb-4">
            <h3 className="font-semibold text-red-900 mb-2">
              API Not Supported
            </h3>
            <p className="text-red-800 text-sm">
              The Network Information API is not supported in your browser.
              This API is currently supported in Chrome, Edge, and Opera.
            </p>
          </div>
        ) : (
          <div className="bg-green-50 border border-green-200 rounded p-4 mb-4">
            <h3 className="font-semibold text-green-900 mb-2">
              API Supported ✓
            </h3>
            <p className="text-green-800 text-sm">
              Your browser supports the Network Information API. Information
              below updates automatically when your connection changes.
            </p>
          </div>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Network Properties</h2>

        <div className="space-y-4">
          {/* Effective Type */}
          <div className="border border-gray-300 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold">Effective Type</h3>
                <p className="text-sm text-gray-600 mt-1">
                  The effective type of the connection (slow-2g, 2g, 3g, or 4g)
                </p>
              </div>
              {networkInfo.effectiveType && (
                <span
                  className={`px-3 py-1 rounded border text-sm font-semibold ${getEffectiveTypeColor(
                    networkInfo.effectiveType
                  )}`}
                >
                  {networkInfo.effectiveType.toUpperCase()}
                </span>
              )}
            </div>
            <div className="mt-2">
              <span className="text-gray-700">Value: </span>
              {formatValue(networkInfo.effectiveType)}
            </div>
          </div>

          {/* Downlink */}
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold">Downlink</h3>
            <p className="text-sm text-gray-600 mt-1 mb-2">
              Effective bandwidth estimate in megabits per second (Mbps)
            </p>
            <div className="mt-2">
              <span className="text-gray-700">Value: </span>
              {formatValue(networkInfo.downlink, "Mbps")}
            </div>
          </div>

          {/* RTT (Round Trip Time) */}
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold">RTT (Round-Trip Time)</h3>
            <p className="text-sm text-gray-600 mt-1 mb-2">
              Estimated effective round-trip time in milliseconds
            </p>
            <div className="mt-2">
              <span className="text-gray-700">Value: </span>
              {formatValue(networkInfo.rtt, "ms")}
            </div>
          </div>

          {/* Save Data */}
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold">Save Data</h3>
            <p className="text-sm text-gray-600 mt-1 mb-2">
              User agent&apos;s preference for reduced data usage
            </p>
            <div className="mt-2">
              <span className="text-gray-700">Value: </span>
              {networkInfo.saveData === undefined ? (
                <span className="text-gray-400 italic">Not available</span>
              ) : (
                <span
                  className={`px-2 py-1 rounded text-sm font-medium ${
                    networkInfo.saveData
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {networkInfo.saveData ? "Enabled" : "Disabled"}
                </span>
              )}
            </div>
          </div>

          {/* Connection Type */}
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold">Connection Type</h3>
            <p className="text-sm text-gray-600 mt-1 mb-2">
              The type of connection a device is using (wifi, cellular, ethernet, etc.)
            </p>
            <div className="mt-2">
              <span className="text-gray-700">Value: </span>
              {formatValue(networkInfo.type)}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded p-4">
        <h3 className="font-semibold text-blue-900 mb-2">Use Cases:</h3>
        <ul className="text-blue-800 text-sm list-disc list-inside space-y-1">
          <li>Serve high-quality media on fast connections</li>
          <li>Pre-load resources when connection is good</li>
          <li>Respect user&apos;s data-saving preferences</li>
          <li>Adapt video quality based on bandwidth</li>
          <li>Show offline/low-bandwidth UI when appropriate</li>
        </ul>
      </div>
    </div>
  );
}

export default NetworkInformation;