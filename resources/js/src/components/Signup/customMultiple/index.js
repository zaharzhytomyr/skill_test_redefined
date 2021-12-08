import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react';
import Chip from '@material-ui/core/Chip';
import useStyles from './style';

const MyChip = (props) => {
    const [state, setState] = React.useState(false);
    const handleClick = () => {
      setState(prev => !prev);
    }
    return (
        <Chip
          style={{border: state?'1px solid grey': ''}}
          onClick={handleClick}
          {...props}
        />
    );
  };

const technologies = [
    { label: 'C'},
    { label: 'c language'},
    { label: 'c developer'},
    { label: 'c program'},
    { label: 'c programming'},
    { label: "JS"},
    { label: 'ReactJS'},
    { label: 'NodeJS'},
    { label: 'Testing'},
    { label: 'AngularJS'},
    { label: 'VueJS' },
    { label: 'HTML' },
    { label: 'CSS' },
    { label: 'Bootstrap' },
    { label: 'Bootstrap 5' },
    { label: 'Haxe' },
    { label: "Java" },
    { label: 'JVM' },
    { label: 'JRE' },
    { label: 'Juputer' },
    { label: 'Python' },
    { label: 'Pandas' },
    { label: 'Redux' },
    { label: 'Redux-thunk' },
    { label: "Redux saga" },
    { label: 'Tailwind' },
    { label: 'React Native' },
    { label: 'React' },
    { label: 'Angular' },
    { label: 'XML' },
    { label: 'WebRTC' },
    { label: 'JSON' },
    { label: 'C++' },
    { label: 'Qt' },
    { label: 'VsCode' },
    { label: 'WebStorm' },
    { label: 'Intellij Idea' },
    { label: 'Blockchain' },
    { label: 'Web Sockets' },
    { label: 'ffmpeg' },
    { label: 'VR' },
    { label: 'B2B' },
    { label: 'B2C' },
    { label: 'C2B' },
    { label: 'UML' },
    { label: 'Software' },
    { label: 'Developer' },
    { label: 'Designer' },
    { label: 'Figma' },
    { label: 'Photoshop' },
    { label: 'Ant Design' },
    { label: 'ES5' },
    { label: 'ES6' },
    { label: 'ES7' },
    { label: 'Java Core' },
    { label: 'Threads' },
    { label: 'C++98' },
    { label: 'C++03' },
    { label: 'C++17' },
    { label: 'Django' },
    { label: 'Spring' },
    { label: 'GUI' },
    { label: 'Software Designer' },
    { label: 'XCode' },
    { label: 'Xamarin' },
    { label: 'Android developer' },
    { label: 'Android' },
    { label: 'IOS' },
    { label: 'IOS Developer' },
    { label: 'Apple' },
    { label: 'XML' },
    { label: 'SQL' },
    { label: 'MySQL' },
    { label: 'Postgress' },
    { label: 'NoSQL' },
    { label: 'ORM' },
    { label: 'MongoDB' },
    { label: 'Firebase' },
    { label: 'Microservice' },
    { label: 'Monolith' },
    { label: 'Web API' },
    { label: 'ECMA Script' },
    { label: 'Eclips' },
    { label: 'Excel' },
    { label: 'Data Science' },
    { label: 'HR' },
    { label: 'Integration' },
    { label: 'Laravel' },
    { label: 'PHP' },
    { label: 'Yii2' },
    { label: 'Yii3' },
    { label: 'Haskell' },
    { label: 'ELM' },
    { label: "JQuery" },
    { label: 'JDBC' },
    { label: 'Heroku' },
    { label: 'Visual Basic' },
    { label: 'TypeScript' },
    { label: 'Web 2.0' },
    { label: 'Web Design' },
  ];
  

const CustomMultiple = ({input, meta, ...props}) => {
    const styles = useStyles();

    return (
        <>
            <Autocomplete
                { ...input}
                multiple
                id="tags-outlined"
                options={technologies}
                getOptionLabel={(option) => option.label}
                defaultValue={[technologies[5]]}
                filterSelectedOptions
                value={input.value}
                {...props}
                onChange={(e, newval, reason) => {
                    input.onChange(newval);
                }}
                noOptionsText="Press Enter to add"
                classes={{
                    tag: styles.tag
                }}
                onBlur={(e) => {
                    if (e.target.value && e.target.value.trim() !== '') {
                        input.onChange(input.value.concat({label: e.target.value}));
                    }
                    input.onBlur(e);
                }}
                getOptionSelected={(option, value) => {
                    return option.label === value.label
                }}
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label="Enter your skills*"
                    placeholder="Favorites"
                    error={meta.touched && (!!meta.error)}
                    onKeyDown={( e ) => {
                        if (e.code === 'Enter' && e.target.value && e.target.value.trim() !== '') {
                            console.log(e.target.value);
                            e.preventDefault();
                            input.onChange(input.value.concat({label: e.target.value}));
                        }
                    }}
                />
                )}
                renderTags={(tagValue, getTagProps) => {
                    return tagValue.map((option, index) => (
                        <MyChip {...getTagProps({ index })} label={option.label} />
                    ));
                }}
            />
            { meta.touched && meta.error && <span style={{
                color: '#f44336',
                margin: '-15px 14px 15px 14px',
                fontSize: '0.8rem'
            }}>{meta.error}</span>}
        </>
    )
}

export default CustomMultiple;
