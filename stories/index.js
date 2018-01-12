import React from 'react'
import { configure, addDecorator } from '@storybook/react'

import StorybookStylesProvider from './StorybookStylesProvider'

const styles = {
    padding: 15,
}

const LocalProviderDecorator = story => (
    <div style={styles}>
        <StorybookStylesProvider>{story()}</StorybookStylesProvider>
    </div>
);

const loadStories = () => {
    addDecorator(LocalProviderDecorator);

    require('../src/components/Arrow/stories');
    require('../src/components/Button/stories');
    require('../src/components/Checkbox/stories');
    require('../src/components/Input/stories');
    //require('../src/components/Table/stories');
    require('../src/components/Select/stories');
    require('../src/components/Switch/stories');
    require('../src/components/SwitchPanel/stories');
    require('../src/components/DatePicker/stories');
    require('../src/components/Modal/stories');
    require('../src/components/CompleteAppeal/stories');
    require('../src/components/Rate/stories');
    require('../src/components/RatePanel/stories');
    require('../src/components/TextArea/stories');
    require('../src/components/Icon/stories');
    require('../src/components/Tabs/stories');
    require('../src/components/CancelVisitModal/stories');
    require('../src/components/Upload/stories');
    require('../src/components/NewMessageModal/stories');
    require('../src/components/TimePicker/stories');
    require('../src/components/Links/stories');
    require('../src/components/Popover/stories');
    require('../src/components/TopPanel/stories');
    require('../src/components/TopPanelItem/stories');
    require('../src/components/ReceptionsScheduleModal/stories');
    require('../src/components/ProfileAvatar/stories');
    require('../src/components/DoctorProfileCard/stories');
    require('../src/components/CompletionReceptionModal/stories');
    require('../src/components/Review/stories');
    require('../src/components/Card/stories');
    require('../src/components/Reviews/stories');
    require('../src/components/RadioIcon/stories');
    require('../src/components/TableNoHeadItem/stories');
    require('../src/components/TableNoHead/stories');
    require('../src/components/TreatmentTableItem/stories');
    require('../src/components/TreatmentTable/stories');
    require('../src/components/DiseasesTableItem/stories');
    require('../src/components/DiseasesTable/stories');
    require('../src/components/ProfilePatient/stories');
    require('../src/components/Accordion/stories');
    require('../src/components/Radio/stories');


    require('../src/components/SideNav/stories');
};

configure(loadStories, module);