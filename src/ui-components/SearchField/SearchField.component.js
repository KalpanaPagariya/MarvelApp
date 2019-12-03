import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from './SearchField.styles';
import Downshift from 'downshift';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import isEmpty from 'lodash/isEmpty';

const useStyles = makeStyles(styles);

/**
 * Common Componenet Search Field with auto complete
 * @param {} props 
 */
const SearchField = (props) => {

    const classes = useStyles();
    const { suggestions, placeholder, label, labelKey, onSelectItem } = props;
    const [searchText, setSearchText] = useState('');

    /**
     * To returns the values drop down of the search field. It also filteres the suggestion based on user input.
     * @param {*} value 
     * @param {*} param1 
     */
    const getSuggestions = (value, { showEmpty = false } = {}) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
      
        return inputLength === 0 && !showEmpty
          ? []
          : suggestions.filter(suggestion => {
              const keep =
                 suggestion[labelKey].slice(0, inputLength).toLowerCase() === inputValue;

              return keep;
            });
      }

      /**
       * This function renders the drop down menu of search field.
       * @param {*} suggestionProps 
       */
      const renderSuggestion = (suggestionProps) => {
        const { suggestion, index, itemProps, highlightedIndex } = suggestionProps;
        const isHighlighted = highlightedIndex === index;
      
        return (
          <MenuItem
            {...itemProps}
            key={suggestion[labelKey]}
            selected={isHighlighted}
            component="div"
            className={classes.menuItem}
          >
            {suggestion[labelKey]}
          </MenuItem>
        );
      }

      /**
       * This function renders the search textbox in search field
       * @param {*} inputProps 
       */
      const renderInput =(inputProps) => {
        const { InputProps, classes, ref, ...other } = inputProps;
      
        return (
          <TextField
            InputProps={{
              inputRef: ref,
              classes: {
                root: classes.inputRoot,
                input: classes.inputInput,
              },
              ...InputProps,
            }}
            {...other}
          />
        );
      }

      /**
       * This function sends the selected item back to the calling component
       * @param {*} selectedItemStr 
       */
    const onChangeDownshift= (selectedItemStr) =>{
      const selectedItem = JSON.parse(selectedItemStr);
      if(onSelectItem){
        onSelectItem(selectedItem);
      }
    }

    return (
      <div className={classes.root}>
      
           <Downshift id="downshift-options" onChange={onChangeDownshift}>
          {({
            clearSelection,
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            highlightedIndex,
            inputValue,
            isOpen,
            openMenu,
            selectedItem,
          }) => {
            const selectedItemLabel = selectedItem ?JSON.parse(selectedItem)[labelKey]  : null;
            const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
              onChange: event => {
                if (event.target.value === '') {
                  clearSelection();
                }
                setSearchText(event.target.value);
                
              },
              onFocus: openMenu,
              value: selectedItem && isEmpty(searchText)? selectedItemLabel : searchText,
              placeholder: placeholder,
            });
  
            return (
              <div className={classes.container}>
                {renderInput({
                  fullWidth: true,
                  classes,
                  label: label,
                  InputLabelProps: getLabelProps({ shrink: true }),
                  InputProps: { onBlur, onChange, onFocus },
                  inputProps,
                })}
  
                <div {...getMenuProps()}>
                  {isOpen ? (
                    <Paper className={classes.paper} square>
                      {getSuggestions(inputValue, { showEmpty: true }).map((suggestion, index) =>
                        renderSuggestion({
                          suggestion,
                          index,
                          itemProps: getItemProps({ item: JSON.stringify(suggestion)}),
                          highlightedIndex,
                          selectedItem,
                        }),
                      )}
                    </Paper>
                  ) : null}
                </div>
              </div>
            );
          }}
        </Downshift>
      </div>
    );
}

SearchField.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  labelKey: PropTypes.string, 
  onSelectItem: PropTypes.func
}

export default SearchField;