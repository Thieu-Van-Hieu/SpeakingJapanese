let question_random = [];
    while (question_random.length < 3) {
        const index = Math.floor(Math.random() * 6);
        console.log(!question_random.includes(1) + ' ' + index);
        if (!question_random.includes(index))
            question_random.push(index);
    }

    console.log(question_random);