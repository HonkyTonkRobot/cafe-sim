# Cafe Sim

## Personal Project for practice and entertainment

### Project Goals
1. Use React
    - Routing
    - state
    - react forms
2. Implement an API
3. Use Express, and server side JavaScript
4. practice building more modular code base
5. useQuery, useMutation w/Tanstacks React Query
6. Some kind of game logic

### Project Outline

#### Game Story
The game starts with an empty cafe, and the door chime let's you know a customer has come in, The customer makes an order, and the barista accepts or declines the order depending on if they can fulfill their order request. If the order is declined the Cafe's star rating goes down.

If the order is accepted, the cafe makes money and the cafe rating goes up, and now has tickets they have to fulfill, but only so many tickets can be filled at a time, so as the cafe gets busier the barista has to carefully calculate the order of operations to get all the orders out in a timely manner. If too much time elapses the customer gets grumpy and the cafe star rating goes down.

With every accepted order the stock levels go down, and periodically more stock must be purchased from the store to keep the cafe running. This has to be balanced with the amount of Money the cafe has made.

Also when visiting the store new fancier products that can be sold at higher price points can be purchased. However these products also incur a training cost. As your products get fancier, fewer order will get declined, and the star rating of the cafe will increase.

There is no winning the game, but the goal is to make as much money as possible and keep a high star rating for your cafe.

#### Basic Building Blocks
- [ ] Build Game as a paper game, simple text visuals, with basic graphics
- [ ] Create Screens
    - [ ] Cafe Home
    - [x] Start Game Screen
    - [x] Instructions Screen
    - [x] Customer Order Screen
    - [ ] Customer receiving order screen
    - [x] Ticket Screen
    - [x] Inventory Screen
    - [ ] Menu Screen
    - [x] Store screen
- [ ] Button for generating new customer
    - [ ] Create random order based on available menu
    - [ ] Accept or deny order
    - [ ] Update till
    - [ ] Update star rating
    - [ ] update stock
    - [ ] generate ticket
    - [ ] display ticket on ticket board
    - [ ] Start time from order clock on ticket

- [ ] Fulfill Order
    - [ ] Click button to start making food item on ticket
        - [ ] Start countdown timer for item
    - [ ] Click button for complete order (disabled until all ticket timers finish)
        - [ ] Customer response to receiving order


#### Building Blocks Implementation Plan

#### Future Game Extensions
