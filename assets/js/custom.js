// Read More Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.blog-card');
            const blogBody = card.querySelector('.blog-body');
            const excerpt = card.querySelector('.blog-excerpt');
            
            card.classList.toggle('expanded');
            
            if (card.classList.contains('expanded')) {
                blogBody.style.maxHeight = blogBody.scrollHeight + "px";
                excerpt.style.display = 'none';
                this.textContent = 'Read Less';
            } else {
                blogBody.style.maxHeight = '0';
                excerpt.style.display = 'block';
                this.textContent = 'Read More';
            }
        });
    });
}); 