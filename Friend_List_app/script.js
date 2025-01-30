let friends = [];
const images = [
    '1.jpg', // Replace with the actual path to your first image
    '2.jpg', // Replace with the actual path to your second image
    '3.jpg', // Replace with the actual path to your third image
    '4.jpg', // Replace with the actual path to your fourth image
    '5.jpg'  // Replace with the actual path to your fifth image
];

let currentIndex = 0; // Start with the first image

// Function to toggle between sections
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const isVisible = section.style.display === 'block';
    // Hide all sections
    const sections = document.querySelectorAll('.toggle-section');
    sections.forEach(sec => sec.style.display = 'none');
    
    // Show the clicked section if it was not visible
    if (!isVisible) {
        section.style.display = 'block';
    }
}

function addFriend() {
    const name = document.getElementById("addName").value;
    const status = document.getElementById("addStatus").value;
    if (name && status) {
        friends.push({ name, status });
        alert(`${name} has been added to your friend list.`);
        document.getElementById("addName").value = '';
        document.getElementById("addStatus").value = '';
    } else {
        alert("Please enter valid details.");
    }
}

function removeFriend() {
    const name = document.getElementById("removeName").value;
    friends = friends.filter(friend => friend.name.toLowerCase() !== name.toLowerCase());
    alert(`${name} has been removed from your friend list.`);
    document.getElementById("removeName").value = '';
}

function editFriend() {
    const oldName = document.getElementById("editOldName").value;
    const friend = friends.find(friend => friend.name.toLowerCase() === oldName.toLowerCase());
    if (friend) {
        const newName = document.getElementById("editNewName").value;
        const newStatus = document.getElementById("editNewStatus").value;
        friend.name = newName;
        friend.status = newStatus;
        alert("Friend's name and status updated.");
        document.getElementById("editOldName").value = '';
        document.getElementById("editNewName").value = '';
        document.getElementById("editNewStatus").value = '';
    } else {
        alert("Friend not found.");
    }
}

function listFriends() {
    const friendListDiv = document.getElementById("friendList");
    friendListDiv.innerHTML = ""; // Clear the current list

    if (friends.length === 0) {
        friendListDiv.innerHTML = "<p>No friends in the list.</p>";
        return;
    }

    friends.forEach(friend => {
        const friendItem = document.createElement("div");
        friendItem.className = "friend-item";
        friendItem.innerText = `${friend.name} (${friend.status})`;
        friendListDiv.appendChild(friendItem);
    });
}

function searchFriend() {
    const name = document.getElementById("searchName").value;
    const friend = friends.find(friend => friend.name.toLowerCase() === name.toLowerCase());
    if (friend) {
        alert(`${friend.name} is in your friend list with status: ${friend.status}`);
    } else {
        alert("Friend not found.");
    }
}

function countFriends() {
    alert(`You have ${friends.length} friends.`);
}

function clearFriends() {
    if (confirm("Are you sure you want to clear the friend list?")) {
        friends = [];
        alert("All friends have been removed from your friend list.");
    }
}

// Function to initialize and change the background images with blur effect
function changeBackground() {
    const backgroundDiv = document.querySelector('.background');
    const allImages = images.map(image => {
        const imageDiv = document.createElement('div');
        imageDiv.style.backgroundImage = `url(${image})`;
        return imageDiv;
    });

    // Append images to the background container
    allImages.forEach(imageDiv => backgroundDiv.appendChild(imageDiv));

    // Function to slide images at regular intervals
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        backgroundDiv.style.transform = `translateX(-${currentIndex * 100}vw)`; // Move images to the left
    }, 3000); // Slide every 3 seconds
}

// Start changing the background when the page loads
window.onload = changeBackground;
