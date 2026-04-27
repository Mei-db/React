document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.getElementById('saveDraftBtn');
    
    saveBtn.addEventListener('click', () => {
        const formData = {
            toggles: {
                publicFigure: document.getElementById('publicFigure').checked,
                animetaVerified: document.getElementById('animetaVerified').checked,
                aniAppOnboarded: document.getElementById('aniAppOnboarded').checked,
                delistCreator: document.getElementById('delistCreator').checked
            },
            managedBy: document.querySelector('input[name="managedBy"]:checked').value,
            contactDetails: {
                fullName: document.getElementById('fullName').value,
                instaHandle: document.getElementById('instaHandle').value,
                creatorType: document.getElementById('creatorType').value,
                directMobile: {
                    prefix: document.getElementById('directMobilePrefix').value,
                    number: document.getElementById('directMobile').value
                },
                creatorEmail: document.getElementById('creatorEmail').value,
                pocName: document.getElementById('pocName').value,
                pocMobile: {
                    prefix: document.getElementById('pocMobilePrefix').value,
                    number: document.getElementById('pocMobile').value
                },
                pocEmail: document.getElementById('pocEmail').value,
                relationship: document.getElementById('relationship').value,
                city: document.getElementById('city').value,
                state: document.getElementById('state').value,
                country: document.getElementById('country').value
            }
        };

        console.log('Form Data Saved:', formData);
        alert('Data printed to console!');
    });
});
