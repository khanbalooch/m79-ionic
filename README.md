# M79-IONIC CHALLENGE

This is coding challenge given by Melno79/M79 to regarding ionic application development. An ionic app that populates a list using random data. User can use search bar to filter list data. On clicking a list item user is navigated to a detailed page 

## Challenge Statement/ Application Requirement
Your goal is to build an Ionic application, which contains a searchable list, which is populated by random data.
While searching, the list should adapt reactively based on the search keyword. Utilize a debounce to ensure a good UX.
On top, the user should see a counter of how many elements are currently shown in the list. The counter should also be updated reactively.
When the user clicks on a list element, she gets navigated to a detail page, where the data is shown.
From the detail page the user can navigate back to the list.
The design can be chosen by you - make sure the UX and design is appealing.

- 🔭 Use latests Ionic and Capacitor version
- 🔭 Use Ionic components where possible
- 🔭 Use a declarative programming approach
- 🔭 Make results shareable via Gitlab/Github
- 🔭 The project structure should be easily extendable and maintainable for further modules/components
- 🔭 The selected project structure should enable high performance of the front-end app, even when more modules/components would be
added to the project

Skills: IONIC 6/ ANGULAR 13 / NODEJS 16/ JS (ES6)/ HTML / SCSS

### REQUIREMENTS

- 🔭 IONIIC6
- 🔭 Angular 13
- 🔭 NODEJS 16.x.x


### Local Running/ Development Server

1. move to app root directory
2. run npm install
3. ionic serve
4. Now open http://localhost:8100/



### Testing

1. move to app root directory
2. run npm install
3. npm test

### Test Driven Development

Writing unit test cases in such a way that it explains/describes the functional requirements
And the developer implements the unit/module as directed by the test suit/cases
just checkout the test suit for [Pipe Filter, filter.pipe.spec.ts](https://github.com/khanbalooch/m79-ionic/blob/main/src/app/shared-components/pipes/filter.pipe.spec.ts)

How it is described to the developer

```

    it('Should Not filter on empty input, Input: Empty Array, Expected Output: Empty List', () =>{
        expect(filter.transform([],'','name').length).toEqual(Number(0));
    });

```
BreakDown
function : Should Not filter on empty input
input: Empty Array<User>
output: Empty Array<User>

```