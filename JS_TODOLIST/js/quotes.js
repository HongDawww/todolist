const quotes = [
	{
		quete: "질병은 입을 좇아 들어가고 화근은 입을 좇아 나온다 - ",
		author: "태평어람"
	}
	,
	{
		quete: "행복이란 타인을 행복하게 해주려는 노력의 부산물이다 - ",
		author: "태평어람"
	}
	,
	{
		quete: "지혜는 듣는 데서 오고 후회는 말하는 데서 온다 - ",
		author: "태평어람"
	}
	,
	{
		quete: "인간의 의욕하는 것, 그리고 창조하는 것에 의해서만이 행복하다 - ",
		author: "태평어람"
	}
	,
	{
		quete: "착한 일을 하는 사람에게는 하늘이 복을 주시고, 악한 일을 하는 사람에게는 하늘이 재앙을 주느니라 - ",
		author: "공자:명심보감"
	}
	,
	{
		quete: "탐욕은 일체를 얻고자 욕심내어서 도리어 모든 것을 잃어버린다 - ",
		author: "몽테뉴"
	}
	,
	{
		quete: "백 권의 책에 쓰인 말보다, 한 가지 성실한 마음이 더 크게 사람을 움직인다 - ",
		author: "프랭클린"
	}
	,
	{
		quete: "가장 높은 곳에 올라가려면 가장 낮은 곳부터 시작하라 - ",
		author: "푸블릴리우스 시루스"
	}
	,
	{
		quete: "건강을 이기는 美는 없다 - ",
		author: "푸블릴리우스 시루스"
	}
	,
	{
		quete: "프로에게서 자기 수련과 극기심을 배워라 - ",
		author: "카우틸랴"
	}

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quete;
author.innerText = todaysQuotes.author;
