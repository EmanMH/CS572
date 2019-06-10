export function addAvailability(isAvailable:boolean)
{
    return function(targetClass:Function)
    {
        return class {
          available=isAvailable;
        }
    }
}