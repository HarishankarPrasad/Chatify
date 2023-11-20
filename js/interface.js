// const searchChannels = async () => {
//     const searchInput = document.getElementById('search');
//     const channelContainer = document.getElementById('channelContainer');

//     // Fetch JSON data from external file
//     try {
//         const response = await fetch('../assets/random_channels.json'); // Replace with the correct path to your JSON file
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const channelData = await response.json();

//         searchInput.addEventListener('input', () => {
//             const searchTerm = searchInput.value.toLowerCase();
//             const matchingChannels = channelData.channels.filter(channel =>
//                 channel.name.toLowerCase().includes(searchTerm)
//             );

//             // Update the HTML content based on matching channels
//             channelContainer.innerHTML = matchingChannels.map(channel =>
//                 `<div class="channel-item">
//                     <h3>#${channel.name}</h3>
//                 </div>`
//             ).join('');
//         });
//     } catch (error) {
//         console.error('Error fetching JSON data:', error);
//     }
// };

// // Call the function to initialize live search
// searchChannels();

const searchChannels = async () => {
    const searchInput = document.getElementById('search');
    const channelContainer = document.getElementById('channelContainer');

    // Fetch JSON data from external file
    try {
        const response = await fetch('../assets/random_channels.json'); // Replace with the correct path to your JSON file
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const channelData = await response.json();

        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const matchingChannels = channelData.channels.filter(channel =>
                channel.name.toLowerCase().includes(searchTerm)
            );

            // Update the HTML content based on matching channels
            channelContainer.innerHTML = matchingChannels.map(channel =>
                `<div class="channel-item">
                    <h3> #${channel.name}</h3>
                </div>`
            ).join('');

            // Make the search results div scrollable
            channelContainer.style.maxHeight = '200px'; // Set the desired max height
            channelContainer.style.overflowY = 'auto';
        });
    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
};

// Call the function to initialize live search
searchChannels();
