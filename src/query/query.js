class Query {
  constructor(options) {
    this.limit = options.limit || 15;
    this.filters = options.filters || {};

    this.state = {
      page: 1,
      pages: 1,
      cound: 0,
      sortBy: null,
      sortDirection: null
    };
    console.log('create'); 
  }
}