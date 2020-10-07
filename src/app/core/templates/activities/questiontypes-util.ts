import {QuestionTypes} from "./questiontypes-enum";

/**
 * Utility class for the QuestionTypes enum
 */
export class QuestiontypesUtil {

    /**
     * Returns a list of the values of the question types enum
     */
    public static getList() {
        return Object.entries(QuestionTypes).map(k => k[1]);
    }
}
