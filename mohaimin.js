function knowDate(){
    let date = new Date();

let today = date.getDay();
switch (today) {
    case 0:
        alert('আজ রবিবার');
        break;
    case 1:
        alert('আজ সোমবার');
        break;
    case 2:
        alert('আজ মঙ্গলবার ');
        break;
    case 3:
        alert('আজ বুধবার');
        break;
    case 4:
        alert('আজ বৃহস্পতিবার');
        break;
    case 5:
        alert('আজ শুক্রবার')
        break;
    case 6:
        alert('আজ শনিবার ');
        break;

    default:
        alert('এটা কোন বার না');
        break;
}
}
// ha ha ha ha 
//It's help me a lot, because I forget what date continuing Today 