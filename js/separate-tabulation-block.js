//This js makes work a separate tabulation block in each page separetely with its images and content
document.addEventListener("DOMContentLoaded", function() {
    function initAllInfoBlocks() {
        const infoBlocks = document.querySelectorAll('.information_block_section.standalone');
        
        infoBlocks.forEach((infoBlock) => {
            initInfoBlock(infoBlock);
        });
    }

    function initInfoBlock(infoBlock) {
        const tabs = infoBlock.querySelectorAll('.information_block_tab');
        const tabContents = infoBlock.querySelectorAll('.information_block_tab_content');
        const image = infoBlock.querySelector('.information_block_right img');
        
        // Define images for each page
        const pageImages = {
            'kenji-x1': [
                './images/kenji-x1/DSC_0736_front_view_dark_2.jpg',
             	'./images/kenji-x1/DSC_0763_smallsize.jpg',
             	'./images/kenji-x1/pcb-stack-inside-robodrive.png'
            ],
            'geo-lab': [
                'https://placehold.co/200x400',
                'https://placehold.co/250x250',
                'https://placehold.co/300x300'
            ],
            'torch': [
                './images/torch/TORCH_gen2_Render_A27copy.png',
            	'./images/torch/TORCH_gen1_mono3(3)copy.png',
            	'./images/torch/TORCH_gen1_sidecut.png'
            ],
            'robodrive': [
                'https://placehold.co/400x400',
                'https://placehold.co/300x300',
                'https://placehold.co/200x200'
            ],
            'mecha-arm': [
                'https://placehold.co/600x600',
                'https://placehold.co/700x700',
                'https://placehold.co/150x150'
            ]
            // Add image arrays for other pages if needed
        };

        const pageClass = Array.from(infoBlock.classList).find(cls => pageImages.hasOwnProperty(cls));
        const images = pageImages[pageClass] || [];

        function showTab(index) {
            tabs.forEach((tab, i) => {
                tab.classList.toggle('active', i === index);
            });
            tabContents.forEach((content, i) => {
                content.style.display = i === index ? 'block' : 'none';
            });
            if (image && images[index]) {
                image.src = images[index];
            }
        }

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => showTab(index));
        });

        // Show the first tab by default
        showTab(0);
    }

    initAllInfoBlocks();
});