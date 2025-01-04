export type QuestionInfoPropsType = {
    title?: string,
    desc?: string,
    center?: boolean,
    onChange?: (newProps: QuestionInfoPropsType) => void,
    disabled?: boolean,
}

export const QuestionInfoDefaultProps: QuestionInfoPropsType = {
    title: '问卷标题',
    desc: '问卷描述',
    center: false,
}