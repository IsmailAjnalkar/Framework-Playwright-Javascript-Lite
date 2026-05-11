// Simple reusable API client that wraps Playwright's request context.
class APIClient {
  constructor(requestContext, baseURL) {
    // Playwright request context for API calls.
    this.requestContext = requestContext;
    // Base URL for all API endpoints.
    this.baseURL = baseURL;
  }

  // Normalize URL paths to avoid duplicate slashes.
  url(path) {
    return `${this.baseURL.replace(/\/+$/, '')}/${path.replace(/^\//, '')}`;
  }

  // Send a GET request to the normalized API path.
  async get(path) {
    return this.requestContext.get(this.url(path));
  }

  // Send a POST request with JSON body and default headers.
  async post(path, body) {
    return this.requestContext.post(this.url(path), {
      data: body,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

module.exports = { APIClient };
