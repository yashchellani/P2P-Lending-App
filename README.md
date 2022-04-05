# P2P-Lending-App-

##Installation
To install all the dependencies, run the following command in the same directory as this readme. 

```
npm install
```

## IMPORTANT:
To run the project, you must run it in developer mode. 

Do not try to build the project, as this prototype has been designed to store data in-memory. Building the project will cause the memory persistence components to fail.




To run this project, 
Run the command in the same directory as this readme:

```
npm run dev
```

## IMPORTANT
To view the project, YOU MUST start your journey at the register page. This is to ensure that all the in-browser memmory objects are populated along the way. 

To do so, run the following in your browser (for both Borrower and Lender views) first:

http://localhost:3000/register



## Debugging
If you encounter any crashes, it is most likely because an in-memory component has not been populated properly. This may occur since we are using a state-based and browser-based prototype without database persistence. 

To circumvent the errors, simply restart from 

http://localhost:3000/register





