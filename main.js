     // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navbar = document.querySelector('.navbar');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navbar.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navbar.classList.remove('active');
            });
        });

        // Smooth scrolling and active nav links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });

        // Update active nav link on scroll
        window.addEventListener('scroll', () => {
            let current = '';
            const sections = document.querySelectorAll('section');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Animate skill bars when in view
        const skillBars = document.querySelectorAll('.skill-progress');
        const animateSkillBars = () => {
            skillBars.forEach(bar => {
                const rect = bar.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                }
            });
        };

        window.addEventListener('scroll', animateSkillBars);

        // Form submission handler
        function handleFormSubmit(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Here you would typically send the data to a server
            // For now, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
            
            // Reset form
            event.target.reset();
        }

        // Resume download function
        function downloadResume() {
            // Create a sample resume content
            const resumeContent = `
CHANDRA SHEKAR
Full Stack Developer

CONTACT INFORMATION
Email: chandrashekar@email.com
Phone: +91 9876543210
Location: Vijayawada, Andhra Pradesh, India
LinkedIn: linkedin.com/in/chandrashekar
GitHub: github.com/chandrashekar

PROFESSIONAL SUMMARY
Passionate Full Stack Developer with 8 months of hands-on experience in JavaScript, DOM manipulation, and UI debugging. Currently expanding expertise in the MERN Stack to build scalable, responsive web applications. Proven track record of working with complex web platforms and solving frontend challenges.

TECHNICAL SKILLS
Frontend: HTML5, CSS3, JavaScript, React.js, Responsive Design
Backend: Node.js, Express.js, MongoDB, REST APIs
Tools: Git, GitHub, VS Code, DOM Manipulation
Specialties: UI Debugging, Frontend Behavior Analysis

WORK EXPERIENCE
Web Developer | Randstad (GTaaS Platform Support) | 2024 - Present
• Worked on GTaaS platform - JavaScript-heavy internal tool for autonomous vehicle data systems
• Specialized in DOM inspection, UI debugging, and frontend behavior analysis
• Collaborated with cross-functional teams to resolve frontend issues
• Gained hands-on experience with browser-based interfaces and JavaScript logic

PROJECTS
E-Commerce Website - MERN Stack application with user authentication and payment integration
Responsive Portfolio - Modern portfolio website with smooth animations
Task Management App - Productivity application with drag-and-drop functionality
Weather Dashboard - Dynamic weather application using external APIs

EDUCATION
Currently pursuing MERN Stack Development
Strong foundation in Computer Science fundamentals

ACHIEVEMENTS
• 8 months of professional web development experience
• Expertise in DOM manipulation and UI debugging
• Successfully supported complex JavaScript-heavy platform
• Building full-stack applications with modern technologies
            `;
            console.log('Resume content:', resumeContent);

            // Create and download the resume
            const blob = new Blob([resumeContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Chandra_Shekar_Resume.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }

        // Add loading animation for images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });
        });

        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });