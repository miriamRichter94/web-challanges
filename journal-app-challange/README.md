# React State 1: Journal App with Favorite Button State

In this challenge, you will begin building a journal app, which will be expanded in future sessions. In this part, you’ll implement a favorite button to mark entries as favorites.

## Tasks

- Locate the `FavoriteButton` component.
- Replace the `isFavorite` boolean variable with a state variable.
  - Hint: Use the `useState` React hook to manage the state.
- Update the state to toggle when the favorite button is clicked.
  - Hint: Use the dispatcher function (setter function) returned by useState to toggle the current value.
  - Remember: You can toggle a boolean using the NOT operator `!`.

> 💡For now, only the icon will respond to the state change using conditional rendering:
> `{isFavorite ? <StarFilled /> : <Star />}`. The favorite tab and the count of favorites will be implemented in future sessions.

Happy hacking!

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following command:

- `npm run dev` to start a development server

---

# React State 3.1: Journal App with Form Submit

In this challenge we want to store the entries information in a state to be able to add new entries.

## Tasks

### Store the entries in state

- Locate the component with the array containing all journal entries. Here it is the variable `entries` in the `EntriesSection` component.
- Rename the variable to `initialEntries` to reflect this is the initial value for the state.
- Create a new state called `entries` with `initialEntries` as initial value.

Nice, the entries are stored in state now! 🚀

### Life the state up

The component rendering the entries and the component with the form needs to share this state of entries. We need to lift the state up to the first common ancestor of these two components. In the template it is the `App` component.

- Update the function declaration of the `EntriesSection` component to accept a new prop called `entries`.
- Move the `initialEntries` and the state to their common ancestor, e.g. `App`.
- Pass the `entries` state via the `entries` prop down to the `EntriesSection`.

Great, the state lives in the right component now! 🚀

### Let the form trigger an exposed event

We can wire up the form to add entries to the state now. Locate the component with the form. Here it is called `EntryForm`.

- Update this component's function declaration to accept a new prop, like `onAddEntry`. The prop should be used for an event that you trigger when a new journal entry should be added.
- Write a function `handleSubmit` and pass it as the `onSubmit` attribute of the `form` JSX tag.
- In `handleSubmit` gather the values of all input fields. (Hint: you can use `new FormData()` for this.)
- Don't forget to prevent the default form behavior when submitting.
- In `handleSubmit` create an object with the keys `motto` and `notes` containing the fields' values.
- Call `onAddEntry` and pass the object.
- Make sure to reset the form after submitting.

Nice job! The component can now inform its parent when an entry should be added! 🚀

### Updating the state to add new entries

Let's add new entries to the state now.

- Locate the component with the shared state. (The `App` component in this template.)
- Create a function called `handleAddEntry`.
- The function should accept a parameter called `newEntry`, which should be an object describing the new entry.

Your new journal entry needs a date.

- Create a string containing the date in the desired format with the snippet below.
- Add the key `date` to the object describing the new entry.

```jsx
const date = new Date().toLocaleDateString("en-us", { dateStyle: "medium" });
```

Each entry in the `entries` array needs an ID – a unique identifier.

- Install the npm package `uid` via the terminal. You can use the command below.
- Call the function `uid()` to generate a new ID.
- Add the key `id` to the object describing the new entry.

```sh
npm install uid
```

- Call the `setEntries` function and insert the new entry at the beginning of the array.
- Pass the `handleAddEntry` function with the prop `onAddEntry` to the `EntryForm` component.

Done! You can add new entries to your journal now! 🚀 🚀 🚀

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project

---

# React State 3.2: Journal App with Favorite Button and Shared State

In this challenge we want to store the favorite feature in the shared state alongside the other entry data.

## Tasks

### Prepare the state for entries

First we need to make sure all entries in state contain information about the favorite button. Locate the component holding the shared state for all entries. Here it is the `App` component.

- Add the key `isFavorite` with the value `false` to each entry in the `initialEntries` array.
- Add the key `isFavorite` with the value `false` to a newly created entry in the function `handleAddEntry`.

This was important to have a consistent shape of all entry objects 🚀

### Handle clicks on the favorite button

Now let's wire up this information stored in state with the favorite button.

Locate the component with the favorite button. Here it's called `FavoriteButton`.

- Accept a new prop in this component called `onToggleFavorite`. This event should be triggered when users press the favorite button.
- Accept a new prop called `isFavorite`.
- Accept a new prop called `id`.
- Remove the local state `isFavorite` from this component.
- Change the button's `onClick` prop to call `onToggleFavorite` and pass `id` with this call as first argument.

Great, the favorite button can now inform via an exposed event, which entry should be marked as favorite (or which favorite to remove) 🚀

### Drill all the props

> 💡 This step is closely tied to the starter template and depends heavily on the design of your app.

Locate the component that renders a single entry including the favorite button. Here it's `Entry`.

- In this component accept the three props too: `onToggleFavorite`, `isFavorite`, `id`.
- Pass all three props to the `FavoriteButton` component.

Locate the component that renders the list of all entries. Here it's `EntrySection`.

- Accept the prop `onToggleFavorite`.
- Adjust the integration of the `Entry` component to pass the `onToggleFavorite` prop.
- In addition pass each entry's `id` and `isFavorite` information to the `Entry` component as prop.

Everything is wired up! 🚀

### Update the state

Now let's finally adjust the state handling. Go back to the `App` component.

- Create a new function called `handleToggleFavorite` which accepts `id` as parameter.
- Inside this function update the state by calling `setEntries`. To create a new state value iterate over the `entries` array and search for the entry matching the `id`. If the `id` matches invert the value of `isFavorite`. (hint: you can use the array method `map` for this)
- Adjust the integration of the `EntrySection` component to pass the function `handleToggleFavorite` to the `onToggleFavorite` prop.

You have successfully refactored your app to have a more concise state handling! 🚀 🚀 🚀

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project

---

# React State 3.3: Journal App with Entries Filter

In this challenge we need to implement filter buttons to show all entries or only favorites.

## Tasks

### Make the filter buttons clickable (optional)

Users should be able to click on the filter buttons to change the list of entries being displayed. First, we want to make sure the buttons are clickable.

Locate the component that renders the `button` JSX tag. In the template there is `Tab` used as a wrapping component around the `button` tag. To have the button clickable we need to pass the `onClick` prop to it.

- Add the prop `onClick` to the function declaration of this component
- Pass the prop to the `button` tag like this: `onClick={onClick}`

Great, the buttons can be clicked now! 🚀

### Expose events when the filter buttons are clicked

Let's make sure that the right event is triggered when clicking on the buttons.

Find the component where both filter buttons are located beside each other. Here it's the `EntriesSection` component. The component having both buttons needs to expose two events - one event for each button.

- Add two new props to the function declaration of this component: `onShowAllEntries` and `onShowFavoriteEntries`
- Pass the respective prop to the `onClick` prop on the filter buttons

Both buttons are now able to inform their parent component when they are clicked! 🚀

### Store the desired filter option in state

Let's go a level up in the component hierarchy and write the logic to do the actual filtering. Locate the component that has the `entries` state. Here it's the `App` component.

- Create a new state called `filter`, which stores a string with `"all"` as initial value.
- Create a function called `handleShowFavoriteEntries` which sets the `filter` state to `"favorites"`.
- Create a function called `handleShowAllEntries` which sets the `showFavorites` state to `"all"`.
- Pass the two functions down to the `EntriesSection` component via the props `onShowAllEntries` and `onShowFavoriteEntries` you introduced earlier

Now you can click on the two filter buttons and change the `filter` state! 🚀

### The filter logic

You will notice the displayed entries aren't changing yet. This is what we need to solve next.

- Besides the `entries` array which is stored in state, create a new array called `favoriteEntries`, which **should not** be stored in state.
- The value of `favoriteEntries` should be all element from the `entries` array where `isFavorite` is `true` (hint: you can use the array method `filter`).

You have two arrays containing entries now: a list of all entries and a list of the favorite entries. The code has to make a decision which of them should be displayed. The component that renders the entry list accepts a prop for the list of entries that should be display. Here it's the `entries` prop of the `EntriesSection` component.

- Pass the value to this prop conditionally. Depending on the value of the state `filter` you pass the array `entries` or the array `favoriteEntries` (hint: you can use the ternary operator).

Now you will see different entries in the UI when clicking the filter buttons! 🚀

> 💡 If there are no entries displayed after you clicked on the "Favorites" button, you might need to click the "star" button of some entries first.

### Visual highlight for active filter

We are almost done. There are two minor things, that need to be fixed. First, you might notice that one of the two filter buttons is highlighted as active. Clicking the buttons does not change this visual indicator yet.

- Alongside the `entries` prop, also pass down the `filter` state as prop to the component rendering the two buttons. Here it's the `EntriesSection` component.
- Inside of the `EntriesSection` component, add the `filter` prop to the function declaration.

Locate the prop enabling the visual highlight for the buttons. In the template it's the `isActive` prop of the `Tab` and `Badge` components.

- Pass the value of the `isActive` prop conditionally, depending on the value of `filter`, which could be `"all"` or `"favorites"`.

Click on the filter buttons now. You will see that the visual highlight gets applied to the button you clicked, while the other button looses the visual highlight. 🚀

### Show count of all and favorite entries

The last thing we need to adjust is the number inside the filter buttons. They indicate how many entries are in each of the two lists. You might notice they show an arbitrary hardcoded number now.

Stay in the component rendering the two buttons. Here it's the `EntriesSection` component.

- Add two new props to the function declaration: `allEntriesCount` and `favoriteEntriesCount`.

Go up in the component hierarchy to the place where this component is rendered.

- Add the props `allEntriesCount` and `favoriteEntriesCount` props and pass a value for each.
- The value can be read from the `length` property of the two arrays `entries` and `favoriteEntries`. You can access the `length` property by using the dot notion on the array variables.

The UI should display the correct number of entries within the filter buttons now. 🚀

Awesome job! You've worked your way through a rather complex app and coded many cool features that deal with multiple states! 🚀 🚀 🚀

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
