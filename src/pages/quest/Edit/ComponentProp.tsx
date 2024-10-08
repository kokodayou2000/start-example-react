import {FC} from "react";
import useGetComponentInfo from "@/hooks/useGetComponentInfo.ts";
import {getComponentConfByType} from "@/components/QuestionComponents";

const NoProp:FC = () => {
    return <div style={{textAlign: 'center'}}>未选择组件</div>
}

const ComponentProp: FC = ()=> {
    const {selectedComponent} = useGetComponentInfo()
    if (!selectedComponent){
        return <NoProp/>;
    }
    const {type,props} = selectedComponent
    const componentConfByType = getComponentConfByType(type);
    if (!componentConfByType){
        return <NoProp/>;
    }
    const {PropComponent} = componentConfByType
    return <PropComponent {...props}/>
}

export default ComponentProp;