import {getInputSourceId} from "@coconut-xr/natuerlich";
import {GrabHand, PointerController} from "@coconut-xr/natuerlich/defaults";
import {
    ImmersiveSessionOrigin,
    useInputSources,
} from "@coconut-xr/natuerlich/react";

function ImmersiveSession() {
    const inputSources = useInputSources();

    return (
        <ImmersiveSessionOrigin>
            {inputSources.map((inputSource) =>
                inputSource.hand != null ? (
                    <GrabHand
                        cursorOpacity={2}
                        key={getInputSourceId(inputSource)}
                        id={getInputSourceId(inputSource)}
                        inputSource={inputSource}
                        hand={inputSource.hand}
                        cursorPressColor={"#ffd43d"}/>
                ) : (
                    <PointerController
                        key={getInputSourceId(inputSource)}
                        id={getInputSourceId(inputSource)}
                        inputSource={inputSource}
                    />
                ),
            )}
        </ImmersiveSessionOrigin>
    );
}

export default ImmersiveSession;
