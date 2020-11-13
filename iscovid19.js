/**
 * Learn facts about the CoVID-19 disease.
 * This project is of course complete nonsense, but CoVID-19 is not, stay safe.
 */
export class IsCovid19{

    /**
     * Is the CoVID-19 disease about to destroy the world?
     */
    static aboutToDestroyTheWorld(){
        return false;
    }

    /**
     * Is the CoVID-19 disease a hoax?
     */
    static aHoax(){
        return false;
    }

    /**
     * Is the CoVID-19 disease staged by Bill Gates?
     */
    static stagedByBillGates(){
        return false;
    }

    /**
     * Is the CoVID-19 disease a threat to humanity?
     */
    static aThreatToHumanity(){
        return 0.75;
    }

    /**
     * Is it SARS-CoV-2, coronavirus or CoVID-19? Learn it with either the extended or simple answer.
     * @param extended Whether to answer in an extended way.
     */
    static theRealNameOfTheVirus(extended = false){
        if(extended){
            return "No, the SARS-CoV-2 coronavirus causes the CoVID-19 disease."
        }else{
            return false;
        }
    }
}
