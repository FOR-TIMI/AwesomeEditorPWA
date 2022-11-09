import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.info('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.info('jate database created');
    },
  });

// Added logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
 //create conncection to indexDb
 const db = await openDB('jate',1);

 //Create new transaction
 const tx = db.transaction('jate','readwrite');

 //Open up object store
 const store = tx.objectStore('jate');

 //create put request to update a particular object in database
 const request = store.put({ id: 1, value: content});

 let response = await request;
 
 console.info('🚀 - data saved to the database');
}

// Added logic for a method that gets all the content from the database
export const getDb = async () => {
    // Create a connection to the IndexedDB database and the version.
    const db = await openDB('jate',1)
    // Create a new transaction
    const tx = db.transaction('jate', 'readonly')
 
    //open up desired object store
   const store = tx.objectStore('jate');
 
   //To get all data in the database
   const request = store.getAll();
 
   // response
   let response  = await request;
   response = response.map(response => response.value);
  
   console.info('Getting all Data from database')
   return response[0];
};

initdb();
