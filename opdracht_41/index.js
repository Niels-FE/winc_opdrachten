const displayOutput = (output, bool) => {
    holder.innerHTML = '';

    output.forEach(element => {
        let newLiElement = document.createElement('li');
        Object.values(element).forEach(elementEntrie => {
            console.log(elementEntrie);
            if (elementEntrie.includes('https')) {
                newLiElement.innerHTML = newLiElement.innerHTML + `<img src="${elementEntrie}"> <br>`;
            } else {
                newLiElement.innerHTML = newLiElement.innerHTML + elementEntrie + "<br>";
            }
        })
        console.log(bool);
        if (bool) {
            newLiElement.innerHTML = newLiElement.innerHTML + `<input type="button" onclick="findMatch" value="element.zodiac"`;
        }
        holder.appendChild(newLiElement);
    })
}

const sortText = (filteredObject, sortValue) => {
    filteredObject.sort((a, b) => {
        if (a[sortValue] < b[sortValue]) {
            return -1;
        }
        if (a[sortValue] > b[sortValue]) {
            return 1;
        }
        return 0;
    })
}
const inSelectedPeriod = (item, month1, day1, month2, day2) => {
    if (((new Date(item.birthday.mdy).getMonth() == month1) && (new Date(item.birthday.mdy).getDay() > day1)) || ((new Date(item.birthday.mdy).getMonth() == month2) && (new Date(item.birthday.mdy).getDay() < day2))) {
        return true;
    } else {
        return false;
    }
}

const showCapricornWomen = async () => {
    try {
        let filteredObject = await randomPersonData.filter(item => item.gender == 'female').filter(item => item.age > 32).filter(item => inSelectedPeriod(item, 11, 22, 0, 20));
        let sortedObject = await sortText(filteredObject, 'name');
        let outputValue = filteredObject.map(person => ({ name: person.name, surname: person.surname, photo: person.photo }));
        displayOutput(outputValue);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('ready');
    }
}
const countryList = () => {
    const filteredObject = randomPersonData.map(person => ({ country: person.region }));
    sortText(filteredObject, "region");
    displayOutput(filteredObject);
}
const getMaxDate = (currentDate) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const totalDays = oneDay * 365;
    return totalDays + currentDate;
}
const zodiac = (date, month) => {
    if (month == 1 && date >= 20 || month == 2 && date <= 18) {
        return "Aquarius";
    } else if (month == 2 && date >= 19 || month == 3 && date <= 20) {
        return "Pisces";
    } else if (month == 3 && date >= 21 || month == 4 && date <= 19) {
        return "Aries";
    } else if (month == 4 && date >= 20 || month == 5 && date <= 20) {
        return "Taurus";
    } else if (month == 5 && date >= 21 || month == 6 && date <= 21) {
        return "Gemini";
    } else if (month == 6 && date >= 22 || month == 7 && date <= 22) {
        return "Cancer";
    } else if (month == 7 && date >= 23 || month == 8 && date <= 22) {
        return "Leo";
    } else if (month == 8 && date >= 23 || month == 9 && date <= 22) {
        return "Virgo";
    } else if (month == 9 && date >= 23 || month == 10 && date <= 22) {
        return "Libra";
    } else if (month == 10 && date >= 23 || month == 11 && date <= 21) {
        return "Scorpio";
    } else if (month == 11 && date >= 22 || month == 12 && date <= 21) {
        return "Sagittarius";
    } else if (month == 12 && date >= 22 || month == 1 && date <= 19) {
        return "Capricorn";
    }
}
const oldCreditCards = () => {
    const currentDate = Date.now();
    let filteredObject = randomPersonData.filter(item => item.age > 17);
    let newObject = filteredObject.map(object => ({ name: object.name + object.surname, phone: object.phone, creditcard_number: object.credit_card.number, creditcard_expire: '01/' + object.credit_card.expiration }))
    const maxDate = getMaxDate(currentDate);
    let futureObjects = newObject.filter(object => Date.parse(object.creditcard_expire) > currentDate).filter(object => Date.parse(object.creditcard_expire) < maxDate);
    futureObjects.sort((a, b) => { return Date.parse(a.creditcard_expire) - Date.parse(b.creditcard_expire) })
    displayOutput(futureObjects);
}

const matchMaking = () => {
    let filteredObject = randomPersonData.filter(item => item.age > 17);
    sortText(filteredObject, 'name');
    let personInfo = filteredObject.map(person => ({ name: person.name + person.surname, photo: person.photo, region: person.region, age: JSON.stringify(person.age), zodiac: zodiac(new Date(person.birthday.mdy).getDay(), new Date(person.birthday.mdy).getMonth()) }))
    displayOutput(personInfo, true)
}

const allButtons = document.getElementsByTagName('button');
for (button of allButtons) {
    button.addEventListener('click', (event) => {
        switch (event.target.id) {
            case "capricorn":
                showCapricornWomen();
                break;
            case "country":
                countryList();
                break;
            case "creditcard_expire":
                oldCreditCards();
                break;
            case "matchmaking":
                matchMaking();
                break;
            default:
                alert('not known');
        }
    })
}