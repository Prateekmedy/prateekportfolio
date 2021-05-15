import firebase from './firebase';

const firestore = firebase.firestore();
class DaoUtil {
    
    //fetching the "Personal" data from the firestore of the Portfolio2.0
    getPersonalRecord = new Promise( resolve => {

        firestore
            .collection('Informations')
            .doc('Personal Details')
            .onSnapshot(snap => {   
                let personalRecord = snap.data()
                // console.log(personalRecord)
                resolve(personalRecord)
            })
        
    });

    //fetching the "Contact" data from the firestore of the Portfolio2.0
    getContactRecord = new Promise( resolve => {

        firestore
            .collection('Informations')
            .doc('Contact Details')
            .onSnapshot(snap => {   
                let contactRecord = snap.data()
                // console.log(contactRecord)
                resolve(contactRecord)
            })
        
    });

    //fetching the "Social" data from the firestore of the Portfolio2.0
    getSocialRecord = new Promise( resolve => {

        firestore
            .collection('Informations')
            .doc('Social Details')
            .onSnapshot(snap => {   
                let socialRecord = snap.data()
                // console.log(socialRecord)
                resolve(socialRecord)
            })
        
    });


    //fetching the "Certificates" data from the firestore of the Portfolio2.0
    getCertificatesRecord = new Promise( resolve => {

        firestore
            .collection('Conquest')
            .doc('Certificates')
            .onSnapshot(snap => {   
                let certRecord = snap.data()
                // console.log(certRecord)
                resolve(certRecord)
            })
        
    });

    
    //fetching the "Skills" data from the firestore of the Portfolio2.0
    getSkillsRecord = new Promise( resolve => {

        firestore
            .collection('Conquest')
            .doc('Skills')
            .onSnapshot(snap => {   
                let skillsRecord = snap.data()
                // console.log(skillsRecord)
                resolve(skillsRecord)
            })
            
        
    });

    //fetching the "Portfolio" data from the firestore of the Portfolio2.0
    getPortfolioRecord = new Promise( resolve => {
        
        let projects = [];
        firestore
            .collection('Projects')
            .get()
            .then(snap => {
                snap.forEach(project => {
                    projects.push({ id : project.id, data : project.data()})
                });
                // console.log(projects);
            })
            .catch(err => console.error('error in getPortfolioRecord '+err))

        
        resolve(projects)
    })

}
 
export default DaoUtil;