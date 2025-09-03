nums=[1,1,1,2,2,3]
k=2
s=set(nums)
dicts={}
for i in s:
    dicts[i]=0
for i in nums:
    dicts[i]+=1
dicts=dict(sorted(dicts.items(),key=lambda x: x[1], reverse=True))
val=[]
for i in range(1,k):
    val=dicts[i].keys()
print(val)  