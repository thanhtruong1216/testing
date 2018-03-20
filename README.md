
# Specific test suit

1. RSS Feeds test suit

    - Use `tobeDefined()` method to test `allFeeds` variable has been defined.

    - Use `length` method to calculate the length of allFeeds object, after that use `.not.toBe('')` method to test allFeeds variable has been not empty.

    - Use `for` loop method to through `allFeeds` object, use `tobeDefined()` method to test all name and all URL has been defined.

    - Use `for` loop method to through `allFeeds` object, use `.not.toBe('')` method to test all name and all URL is not empty.

2. The menu test suit

    - Select `body` element and check it consist of class `menu-hidden` or not:

        + If it included that class, use `toBeTruthy()` method to ensures the menu element is hidden by default.

        + Use `toBeFalsy()` method to test he menu change to visibility when the menu icon is clicked.

        + Use `toBeTruthy()` method again to test the menu will hide when clicked menu icon again.

3. Initial Entries test suit

    - Use of Jasmine's `beforeEach` and asynchronous `done()` function to ensures `loadFeed()` function was run.

    - Select class `entry` and use `length` function to count the number of entry, after that use `toBeGreaterThan(0)` method to test at least a single entry within the `.feed` container.

4. New Feed Selections test suit

    - Use `beforeAll` method to to capture the original content.

    - Use `not.toEqual()` method to compare new content and the original content.

    - Call `done()` function to finished the test.
