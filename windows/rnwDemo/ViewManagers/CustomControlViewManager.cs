using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

using Windows.UI.Xaml;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Controls;
using Microsoft.ReactNative.Managed;
using rnwDemo.Controls;

namespace rnwDemo.ViewManagers
{
	internal class CustomControlViewManager : AttributedViewManager<AaronsCustomControl>
	{
		 public override FrameworkElement CreateView()
        {
            var view = new AaronsCustomControl();
            view.RegisterPropertyChangedCallback(AaronsCustomControl.LabelProperty, (obj, prop) =>
            {
                if (obj is AaronsCustomControl c)
                {
                    LabelChanged?.Invoke(c, c.Label);
                }
            });

            return view;
        }

        [ViewManagerProperty("label")]
        public void SetLabel(AaronsCustomControl view, string value)
        {
            if (null != value)
            {
                view.SetValue(AaronsCustomControl.LabelProperty, value);
            }
            else
            {
                view.ClearValue(AaronsCustomControl.LabelProperty);
            }
        }

        [ViewManagerProperty("color")]
        public void SetColor(AaronsCustomControl view, Brush value)
        {
            if (null != value)
            {
                view.SetValue(Control.ForegroundProperty, value);
            }
            else
            {
                view.ClearValue(Control.ForegroundProperty);
            }
        }

        [ViewManagerProperty("backgroundColor")]
        public void SetBackgroundColor(AaronsCustomControl view, Brush value)
        {
            if (null != value)
            {
                view.SetValue(Control.BackgroundProperty, value);
            }
            else
            {
                view.ClearValue(Control.BackgroundProperty);
            }
        }

        [ViewManagerCommand]
        public void CustomCommand(AaronsCustomControl view, string arg)
        {
            Debug.WriteLine($"{Name}.{nameof(CustomCommand)}({view.Tag}, \"{arg}\")");
        }

        [ViewManagerExportedDirectEventTypeConstant]
        public ViewManagerEvent<AaronsCustomControl, string> LabelChanged = null;
	}
}
