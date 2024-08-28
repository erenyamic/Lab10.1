// Initial contacts data
let contacts = [
    { name: "Maxwell Wright", phone: "019171916495", email: "contact1@cctb.com" },
    { name: "Raja Villarreal", phone: "0863982895", email: "contact2@cctb.com" },
    { name: "Helen Richards", phone: "080031111", email: "contact3@cctb.edu" }
];

// Function to display contact details
const displayContact = (contact) => {
    const contactList = document.getElementById('contactList');
    const contactItem = document.createElement('div');
    contactItem.innerHTML = `<strong>${contact.name}</strong><br>Phone: ${contact.phone}<br>Email: ${contact.email}<br><br>`;
    contactList.appendChild(contactItem);
}

// Function to add a new contact
const addContact = () => {
    let addMore;
    do {
        let name = prompt("Enter contact name:");
        let phone = prompt("Enter contact phone number:");
        let email = prompt("Enter contact email:");
        
        if (name && phone && email) {
            let newContact = { name: name, phone: phone, email: email };
            contacts.push(newContact);
            setTimeout(() => displayContact(newContact), 1000); // Simulate delay with setTimeout
        } else {
            alert("All fields are required!");
        }

        addMore = confirm("Do you want to add another contact?");
    } while (addMore);
}

// Function to find a contact by name
const findContact = () => {
    let name = prompt("Enter the name of the contact you're looking for:");
    
    if (name) {
        const contact = searchContact(name.toLowerCase());
        if (contact) {
            setTimeout(() => displayContact(contact), 1000); // Simulate delay with setTimeout
        } else {
            alert("Contact not found.");
        }
    }
}

// Function to periodically log contact count
const logContactCount = () => {
    console.log(`Total Contacts: ${contacts.length}`);
}

// Recursive function to search for a contact by name
const searchContact = (name, index = 0) => {
    if (index >= contacts.length) {
        return null;
    }
    if (contacts[index].name.toLowerCase() === name) {
        return contacts[index];
    }
    return searchContact(name, index + 1);
}

// Set up event listeners
document.getElementById('addContactBtn').addEventListener('click', addContact);
document.getElementById('findContactBtn').addEventListener('click', findContact);

// Periodically log the contact count
setInterval(logContactCount, 5000);

// Change background color every 5 seconds
setInterval(() => {
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}, 5000);

// Initial display of contacts
contacts.forEach(contact => displayContact(contact));
