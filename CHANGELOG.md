#CHANGELOG

#9 March 2022
###Lab 7
##Main Features:
- Migrated locally stored mock data to Firebase database
- Created service component to communicate with backend for front page carousels 
- Used carousel service component to display carousels in ngFor loop on home page

#Bonus
- Added additional data to Firebase database for implementation
----------------------------------------

#2 March 2022
###Lab 6
##Main Features:
- Created realtime Firebase backend database
  - Populated with basic info
    - FirstName
    - GitHub
    - LastName
    - mix_id
- Used Angular's HTTP client to get data from backend database
- Created a new user-info component to display the obtained data

#Bonus
- Enhanced CHANGELOG.md readability by using ***Markdown***

----------------------------------------
#24 February 2022
###Lab 5

##Main Features:
- Added product pages to Best Sellers and Bundles
  - Product pages consist of a grid component made to dynamically add cards that dynamically
    update with content from a mock list
    - Mock list exports multiple product lists, so the grid layout has multiple components with different
      selectors so when a page uses a grid, it specifies it by the selector made for said page so
      it pulls the appropriate content from the mock list
  - Product page is split into six columns that are evenly spaced which populate using an ngFor loop which wraps
    every six product cards per row
