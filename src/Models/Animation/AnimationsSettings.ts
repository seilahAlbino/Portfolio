import AnimationOptions from "./AnimationCustomOptions";

interface AnimationSettings {
    initial: { [key: string]: string | number };
    final: { [key: string]: string | number };
    trigger: string;
    customOptions?: AnimationOptions;
}

export default AnimationSettings;