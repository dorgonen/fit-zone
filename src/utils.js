import React from "react";

export const lazyLoading = (path, timeOut) => {
    return React.lazy(() => {
        return Promise.all([
            import(`${path}`),
            new Promise(resolve => setTimeout(resolve, timeOut))
        ])
            .then(([moduleExports]) => moduleExports);
    })
}