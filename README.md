# trackable-input

This is a proof of concept, for tracking input text for animation.

Known problems:
    inputs cant have shadowdom,
    copying the css style for the helper element from the input looks bad

possible solutions:
    create another webcomponent for the helper element. So global css wont effect it, or check for an another way to make the custom element send it's data with the form.(without using ajax)