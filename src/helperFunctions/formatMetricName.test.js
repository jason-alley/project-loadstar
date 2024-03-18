import { expect, test } from 'vitest';
import formatMetricName from './formatMetricName';

test('format Metric Name', () => {
    expect(formatMetricName('FIRST_CONTENTFUL_PAINT')).toBe('First Contentful Paint');
    expect(formatMetricName('FIRST_MEANINGFUL_PAINT')).toBe('First Meaningful Paint');
    expect(formatMetricName('Largest_contentful_paint_ms')).toBe('Largest Contentful Paint Ms');
});