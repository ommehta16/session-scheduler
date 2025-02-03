from django.db import models

# Create your models here.

class Question(models.Model):
    # each class variable = database field for the model
    # each class is a model -- data structure ish?
    # name of each field is name that use in code AND column name in db
    
    # First argument to any Field is a human-readable name -- used a bit in django, more for documentation
    
    question_text = models.CharField(max_length=40)
    pub_date = models.DateTimeField("date published")

    def __str__(self) -> str:
        return f"{self.question_text}\nPublished on {self.pub_date}"

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    # foreignkey means MANY TO ONE: many choices for one question
    # django can also do ONE TO ONE and ONE TO MANY, but idk how to do them

    # the ONE in the relationship gets a property [other]_set
    # so here it's choice_set


    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default = 0)

    def __str__(self):
        return self.choice_text