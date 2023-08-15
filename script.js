function goAbout() {
    smoothScrollTo('main');
}

function goKnowledge() {
    smoothScrollTo('knowledgeTitle');
}

function goExperience() {
    smoothScrollTo('experienceTitle'); 
}

function goContact() {
    smoothScrollTo('contactTitle'); 
}

function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}
