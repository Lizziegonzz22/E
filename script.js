document.addEventListener('DOMContentLoaded', () => {
    const btnPart1 = document.getElementById('btn-part1');
    const btnPart2 = document.getElementById('btn-part2');
    const sectionPart1 = document.getElementById('part1');
    const sectionPart2 = document.getElementById('part2');

    // Function to handle tab switching
    function showSection(activeButton, activeSection, inactiveButton, inactiveSection) {
        activeButton.classList.add('active');
        activeSection.classList.add('active');
        
        inactiveButton.classList.remove('active');
        inactiveSection.classList.remove('active');
    }

    // Event listeners for the buttons
    btnPart1.addEventListener('click', () => {
        showSection(btnPart1, sectionPart1, btnPart2, sectionPart2);
    });

    btnPart2.addEventListener('click', () => {
        showSection(btnPart2, sectionPart2, btnPart1, sectionPart1);
    });
});
