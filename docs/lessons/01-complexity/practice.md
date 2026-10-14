# Сложность и O-нотация: практика

<Task n="1" title="Оценить сложность" level="easy">

Какова сложность цикла?

```python
for i in range(n):
    for j in range(n):
        print(i, j)
```

<template #hint>Посчитайте, сколько раз выполнится тело внутреннего цикла.</template>
<template #solution>n · n = n², то есть **O(n²)**.</template>
</Task>

<Task n="2" title="Сложность с логарифмом" level="medium">

Какова сложность?

```python
i = 1
while i < n:
    i *= 2
```

<template #solution>`i` удваивается, поэтому итераций ≈ log₂ n, то есть **O(log n)**.</template>
</Task>
