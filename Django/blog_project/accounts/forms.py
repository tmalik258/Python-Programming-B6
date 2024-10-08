from django.contrib.auth.forms import UserCreationForm


class CustomUserCreationForm(UserCreationForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        
        # username field
        self.fields['username'].widget.attrs.update({
            'class': 'form-control'
        })
        
        # password1 field
        self.fields['password1'].widget.attrs.update({
            'class': 'form-control'
        })
        
        # password2 field
        self.fields['password2'].widget.attrs.update({
            'class': 'form-control'
        })