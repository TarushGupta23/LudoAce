export class Card {
    constructor(name, value, weight, category, description="") {
        this.name = name; // 2, 3, 4, ... 10, J, Q, K, A
        this.value = value; // 2, 3, 4, ... 10, 0, 0, 0, 1  ->  tells how much your piece will move if used
        this.weight = weight; // 2, 3, 4, ... 10, 11, 12, 13, 14  ->  decides priority of who will move first next round {hight weight is hight priority}
        this.category = category; // demon (d), alien (a), creature (c), machine (m), god (g), eye (e)
        this.description = description; // some text for K, Q, J, A

        this.imgFile = this.name + this.category + ".png"; 
    }
}