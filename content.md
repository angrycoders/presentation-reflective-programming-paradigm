
# Reflective Programming



## Group members

* CS 281-3722/2013 &mdash; Magani Felix Andego
* CS 281-0666/2013 &mdash; Gocho Mugo Ian
* CS 281-0703/2013 &mdash; Steven Oginga
* CS 281-0693/2013 &mdash; Korir Kevin



## introduction:

**Reflection** is the process by which a computer program can **observe** and **modify**
its own structure and behavior at runtime.

> "Follow effective action with quiet reflection. From the quiet reflection will come even more effective action."
>
> &mdash; By Peter F. Drucker


Concepts of reflection
* **structural reflection**:ability of the program to provide full reification of both program currently being executed and a complete reification of its abstract data types
	
* **behavioral reflection**:complete reification of its semantics(processor) as well as complete reification of the data    it uses to execute the current program


In most computer architectures, particularly the **Von Neuman** architecture,
program instructions are stored as data. The distinction between instruction
and data is merely a matter of how the information is treated by the computer
and programming language.


The main aspects:

* **Introspection**: self-examination
* **Intercession**: self-modification
* **Reification**: encoding execution state as data


Note:

Imperative approaches, such as procedural and object-oriented programming paradigms,
specify that there is an exact predetermined sequence of operations with which
to process data. The reflection-oriented programming paradigm, however, adds that
program instructions can be modified dynamically at runtime and invoked in their modified state.



##role of reflective programming
* Allow migration of software
* Adaptation to new technologies
* Adaptation to new needs


## examples:

* discover and modify source code constructions (such as code blocks, classes, methods, protocols, etc.) as a first-class object at runtime
* convert a string matching the symbolic name of a class or function into a reference to or invocation of that class or function
* evaluate a string as if it were a source code statement at runtime.


<pre><code class="codeblock language-javascript" data-source="../code/eval.js"></code></pre>



## caveats:

* Untrusted content: user-submitted content
* Cost of evaluation
* Design costs-need more care and iteration
* Use cost-Complex concepts
* Run-time cost-intercession itself provides an overhead



## references:

* Wikipedia (2015, July 7). Reflection (computer programming). Retrieved from https://en.wikipedia.org/wiki/Reflection_(computer_programming)
* Nørmark, Kurt. Overview of the four main programming paradigms. Aalborg University, 9 May 2011. Retrieved 22 September 2012.
* Brian Cantwell Smith, Procedural Reflection in Programming Languages, Department of Electrical Engineering and Computer Science, Massachusetts Institute of Technology, PhD Thesis, 1982

