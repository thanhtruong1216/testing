
// Placing all of tests within the $() function to ensure all test don't run until the DOM is ready.

$(() => {
  /* This is our first test suite - a test suite just contains
  * a related set of tests. This suite is all about the RSS
  * feeds definitions, the allFeeds variable in our application.
  */
  describe('RSS Feeds', () => {
    // To make sure that the allFeeds variable has been defined and that it is not empty.
    it('AllFeeds variable has been defined and it is not empty', () => {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).toBeGreaterThan(0);
    });

    /* This test loops through each feed in the allFeeds object and ensures
       each object has a URL defined and that the URL is not empty.
     */
    it('URL has been defined and it is not empty', () => {
      allFeeds.forEach((feed) => {
        expect(feed.url).toBeDefined();
        expect(feed.url).toEqual(jasmine.any(String));
        expect(feed.url.length).toBeGreaterThan(0);
      });
    });

    /* This test loops through all feeds of allFeeds
     * and ensures that each feed has a name defined
     * and its name is not empty.
     */
    it('Name has been defined and it is not empty', () => {
      allFeeds.forEach((feed) => {
        expect(feed.name).toBeDefined();
        expect(feed.name).toEqual(jasmine.any(String));
        expect(feed.name.length).toBeGreaterThan(0);
      });
    });
  });


  // Defined test suite "The menu"
  describe('The menu', () => {
    // This test ensures the menu element is hidden by default
    it('The menu element is hidden by default', () => {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
    /* This test ensures the menu changes visibility when the menu icon is clicked.
      * This test has two expectations: does the menu display when
      * clicked and does it hide when clicked again.
    */
    it('Menu change visibility when the menu icon is clicked', () => {
      $('.menu-icon-link').click();
        expect($('body .menu-hidden').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').click();
        expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });


  // Defined test suite "Initial Entries"
  describe('Initial Entries', () => {
    /* Use Jasmine's beforeEach method and asynchronous done() function
      to ensure loadFeed function is called and completes its work
    */
    beforeEach((done) => {
      loadFeed(0, () => {
        done();
      });
    });
    /* If loadFeed function is called and completed it's work,
      ensures that there is at least a single entry within feed container
    */
    it('At least a single entry element within the feed container', () => {
      expect($('.feed .entry').length).toBeGreaterThan(0);
    });
  });


  // Defined a test suite "New Feed Selection"
  describe('New Feed Selections', () => {
    let originalContent;
    let currentContent;
    // Use beforeEach method to ensure the original content and current content of page is loaded
    beforeEach((done) => {
      loadFeed(0, () => {
        originalContent = $('.feed').html();
        loadFeed(1, () => {
          currentContent = $('.feed').html();
          done();
        })
      });
    });
    // Compare current content and original content, call done() method to completed loadFeed function work
    it('Content actually changes when a new feed is loaded', (done) => {
      loadFeed(1, () => {
        expect(currentContent).not.toEqual(originalContent);
        done();
      });
    });
  });

});
