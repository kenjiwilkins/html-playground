import { useState, useEffect } from "react";
import { setCookie, getCookie } from "../../utils/cookies";
import { applyTransition } from "../../utils/transitions";

const TRANSITION_TYPES = [
  { value: "fade", label: "Fade", description: "Fade in/out with vertical movement" },
  { value: "slide", label: "Slide", description: "Slide left to right" },
  { value: "zoom", label: "Zoom", description: "Zoom in/out effect" },
  { value: "rotate", label: "Rotate", description: "Rotate with scale" },
  { value: "none", label: "None", description: "No transition animation" },
];

function ViewTransition() {
  const [currentTransition, setCurrentTransition] = useState("fade");
  const [previewKey, setPreviewKey] = useState(0);

  useEffect(() => {
    // Load current transition from cookie
    const savedTransition = getCookie("view-transition-type");
    if (savedTransition) {
      setCurrentTransition(savedTransition);
    }
  }, []);

  const handleTransitionChange = (transitionType) => {
    setCurrentTransition(transitionType);
    setCookie("view-transition-type", transitionType);

    // Apply transition immediately
    applyTransition(transitionType);
  };

  const triggerPreview = () => {
    // Trigger a view transition for preview
    setPreviewKey((prev) => prev + 1);
  };

  return (
    <div className="p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">View Transition API</h1>

      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          The View Transition API provides a way to create animated transitions between different DOM states.
          Select a transition type below to see it in action when navigating between pages.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-4">
          <h3 className="font-semibold text-blue-900 mb-2">Current Transition:</h3>
          <p className="text-blue-800 text-lg font-medium">{TRANSITION_TYPES.find(t => t.value === currentTransition)?.label}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Choose Transition Type</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TRANSITION_TYPES.map((transition) => (
            <div
              key={transition.value}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                currentTransition === transition.value
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-blue-300"
              }`}
              onClick={() => handleTransitionChange(transition.value)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleTransitionChange(transition.value);
                }
              }}
              aria-pressed={currentTransition === transition.value}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{transition.label}</h3>
                  <p className="text-sm text-gray-600">{transition.description}</p>
                </div>
                {currentTransition === transition.value && (
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Test Your Transition</h2>
        <p className="text-gray-700 mb-4">
          Navigate to other pages using the main navigation to see your selected transition in action!
        </p>

        <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Preview Demo</h3>
          <div
            key={previewKey}
            className="bg-white border-2 border-dashed border-gray-300 rounded p-8 mb-4 text-center"
          >
            <p className="text-2xl font-bold text-gray-700">Preview Content #{previewKey}</p>
            <p className="text-gray-500 mt-2">This content will animate when you click the button below</p>
          </div>
          <button
            onClick={triggerPreview}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition-colors"
          >
            Trigger Preview
          </button>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
        <h3 className="font-semibold text-yellow-900 mb-2">Browser Support:</h3>
        <p className="text-yellow-800 text-sm">
          The View Transition API is supported in Chrome 111+, Edge 111+, and Opera 97+.
          For browsers that don&apos;t support it, navigation will work normally without animations.
        </p>
      </div>
    </div>
  );
}

export default ViewTransition;
