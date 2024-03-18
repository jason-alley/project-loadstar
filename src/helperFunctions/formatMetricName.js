/**
 * @description Format a metric name to be more human-readable, e.g. "first_contentful_paint" to "First Contentful Paint"
 * @param {string} name
 * @returns {string}
 */
function formatMetricName(name) {
    return name
        .toLowerCase()
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '); 
}

export default formatMetricName;