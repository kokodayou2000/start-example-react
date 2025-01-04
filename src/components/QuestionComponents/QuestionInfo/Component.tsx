import {FC} from "react";
import {QuestionInfoPropsType} from "@/components/QuestionComponents/QuestionInfo/interface.ts";
import {QuestionTitleDefaultProps} from "@/components/QuestionComponents/QuestionTitle";
import {Typography} from "antd";

const {Title,Paragraph} = Typography;
const Component: FC<QuestionInfoPropsType> = (props:QuestionInfoPropsType) => {
    const {title = '',desc = '',center = false} = {...QuestionTitleDefaultProps,...props}

    const textList = desc.split("\n")
    return (
      <div>
        <Title  style={{ fontStyle: '24px' ,textAlign: center ? 'center' : 'start'}}>{title}</Title>
        <Paragraph style={{ textAlign: center ? 'center' : 'start'}}>
          {textList.map((text, index) => {
            return <span>
                {
                    index > 0 && <br/>
                }
                {text}
            </span>;
          })}
        </Paragraph>
      </div>
    );

}
export default Component