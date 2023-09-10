import React, { useEffect, useCallback } from 'react';

interface DebounceProps {
    delay: number;
}

const DebounceComponent: React.FC<DebounceProps> = ({ delay }) => {
    const debounce = useCallback(
        (callback: () => void) => {
            let timeoutId: ReturnType<typeof setTimeout> | undefined;

            return () => {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                timeoutId = setTimeout(callback, delay);
            };
        },
        [delay]
    );

    const throttle = useCallback(
        (callback: () => void) => {
            let timeoutId: ReturnType<typeof setTimeout> | undefined;

            return () => {
                if (!timeoutId) {
                    timeoutId = setTimeout(() => {
                        callback();
                        timeoutId = undefined;
                    }, delay);
                }
            };
        },
        [delay]
    );

    const exampleFunction = () => {
        console.log('Function executed!');
    };

    // Create debounced and throttled versions of the example function
    const debouncedExampleFunction = debounce(exampleFunction);
    const throttledExampleFunction = throttle(exampleFunction);

    useEffect(() => {
        // Attach debounced and throttled functions to events or use them as needed
        window.addEventListener('scroll', debouncedExampleFunction);
        window.addEventListener('resize', throttledExampleFunction);

        return () => {
            // Clean up event listeners
            window.removeEventListener('scroll', debouncedExampleFunction);
            window.removeEventListener('resize', throttledExampleFunction);
        };
    }, [debouncedExampleFunction, throttledExampleFunction]);

    return <div>Debounce and Throttle Example</div>;
};

export default DebounceComponent;
