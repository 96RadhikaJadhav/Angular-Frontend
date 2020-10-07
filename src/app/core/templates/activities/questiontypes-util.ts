import {QuestionTypes} from "./questiontypes-enum";

export class QuestiontypesUtil {
    public static getList() {
        return Object.entries(QuestionTypes).map(k => k[1]);
    }
}
