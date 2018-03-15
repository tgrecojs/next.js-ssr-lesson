import { Panel, PanelText, PanelTitle, PanelButton } from '../styles';

const PanelComponent = ({
    title = 'I am the title!',
    buttonText = 'Click Me!',
    text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cum praesentium reprehenderit labore fugiat! Illo optio neque obcaecati sequi voluptatem, ipsa architecto perferendis sapiente, maxime in corporis iure excepturi asperiores!'
}) => (
    <Panel>
        <PanelTitle>{title}</PanelTitle>
        <PanelText>
            {text}
        </PanelText>
        <PanelButton>{buttonText}</PanelButton>
    </Panel>
);

export default PanelComponent
